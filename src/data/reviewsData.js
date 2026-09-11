// Purely user-submitted feedback, absolutely zero mock reviews

export const INITIAL_REVIEWS = [];

const STORAGE_KEY = 'nexford_real_client_reviews';
const AVATAR_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#9C27B0', '#009688', '#E91E63', '#3F51B5'];

export function getStoredReviews() {
  try {
    // Purge any legacy mock storage keys
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('nexford_client_reviews');
      window.localStorage.removeItem('nexford_google_reviews');
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        // Only return genuine user-submitted feedback
        return parsed.filter((r) => r && typeof r.id === 'string' && r.id.startsWith('user-rev-'));
      }
    }
  } catch (err) {
    console.warn('Error reading stored reviews:', err);
  }
  return [];
}

export function saveStoredReviews(reviews) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    window.dispatchEvent(new Event('nexford_reviews_updated'));
  } catch (err) {
    console.warn('Error saving stored reviews:', err);
  }
}

export function addReview({ name, company, rating, service, comment }) {
  const currentReviews = getStoredReviews();
  const randomColor = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

  const newReview = {
    id: 'user-rev-' + Date.now(),
    name: name.trim(),
    role: company.trim() ? company.trim() : 'Verified Client',
    company: company.trim(),
    reviewsCount: '1 review',
    rating: Number(rating) || 5,
    date: 'Just now',
    service: service || 'Web Development',
    comment: comment.trim(),
    likes: 0,
    avatarColor: randomColor
  };

  const updated = [newReview, ...currentReviews];
  saveStoredReviews(updated);
  return newReview;
}

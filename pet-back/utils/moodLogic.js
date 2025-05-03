export const getMood = (createdAt) => {
      const day = (Date.now() - new Date(createdAt)) / (1000 * 60 * 60 * 24);

      if (day < 1) {
            return 'happy';
      } else if (day < 3) {
            return 'neutral';
      } else {
            return 'sad';
      }
};

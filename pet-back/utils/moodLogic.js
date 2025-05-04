export const getMood = (adoption_date) => {

      const day = (Date.now() - new Date(adoption_date)) / (1000 * 60 * 60 * 24);

      if (day < 1) {
            return 'happy';
      } else if (day < 3) {
            return 'excited';
      } else {
            return 'sad';
      }
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reasons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reasons').insert([
        { 
          id: 1,
          reason: `Atheleticism is important to me because I grew up playing sports and gives me a sense of identity.  Career success is important because I want to make a lot of money and become financially independent.`,
          user_id: 1
        },
        { 
          id: 2,
          reason: `Art is important to me because drawing and painting has been a creative outlet for me my entire life.  I love my family and kids.  I enjoy being part of my community and giving back to others.`,
          user_id: 2
        },
     ]);
    });
};

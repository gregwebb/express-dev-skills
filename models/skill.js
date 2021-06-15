const skills = [
    {id: 1, skill: 'HTML/CSS', learned: true},
    {id: 2, skill: 'Javascript', learned: true},
    {id: 3, skill: 'Express', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }
 
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    skills.push(skill);
  }
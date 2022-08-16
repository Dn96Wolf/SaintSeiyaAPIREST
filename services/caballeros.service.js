const boom = require('@hapi/boom');

class KnightService {

  constructor() {
    this.saintsArray = [
      {
        id: `1`,
        name: 'Seiya',
        age: 13,
        height: 153,
        constelation: 'Pegaso',
        category: 'bronce',
      },
      {
        id: `2`,
        name: 'Shun',
        age: 13,
        height: 155,
        constelation: 'Andromeda',
        category: 'bronce'
      },
      {
        id: `3`,
        name: 'Hyoga',
        age: 14,
        height: 165,
        constelation: 'Cisne',
        category: 'bronce'
      },
      {
        id: `4`,
        name: 'Shyriu',
        age: 14,
        height: 175,
        constelation: 'Dragon',
        category: 'bronce',
      },
      {
        id: `5`,
        name: 'Ikki',
        age: 15,
        height: 180,
        constelation: 'Fenix',
        category: 'bronce'
      }
    ];
  }

  create(body) {
    if (body) {
      const bodyKeys = Object.keys(body);
      const bodySaint = this.saintsArray[0];
      const bodySaintKeys = Object.keys(bodySaint);
      bodySaintKeys.splice(0, 1);

      if (bodyKeys.length == bodySaintKeys.length) {
        const idExist = this.saintsArray.length;
        let index = idExist - 1;

        if (idExist == this.saintsArray[index].id) {
          let newId = idExist + 1;
          let id = newId.toString();
          const newSaint = {
            id,
            ...body
          };

          this.saintsArray.push(newSaint);

          return { message: 'New saint was created', newSaint };
        }
      } else {
        throw boom.badRequest('the body do not have the same properties');
      }
    }

  };


  find() {
    return this.saintsArray;
  };

  findOne(id) {
    const saintExist = this.saintsArray.find(knigth => knigth.id === id);
    if (!saintExist) {
      throw boom.notFound('Saint not found');
    }
    return saintExist;
  };

  update(id, body) {
    const saintSelected = this.saintsArray.find(knigth => knigth.id === id);
    let newSaint = undefined;
    let message = '';
    const bodyKeys = Object.keys(body);
    const itHas = bodyKeys.every(p => saintSelected.hasOwnProperty(p));

    if (itHas) {
      newSaint = Object.assign(saintSelected, body);
      message = 'A saint was Update';
    } else {
      throw boom.badRequest('Error estas creando una propiedad nueva');
    }

    return { message, newSaint };
  }

  delete(id) {
    const index = this.saintsArray.findIndex(knigth => knigth.id === id)
    if (index === -1) {
      throw new Error('Saint not Found');
    } else {
      this.saintsArray.splice(index, 1);
      return { message: 'Saint selected was deleted' };
    }

  };
}

module.exports = KnightService;

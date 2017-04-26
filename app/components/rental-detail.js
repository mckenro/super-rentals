import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Do you really want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});

import DS from 'ember-data';

export default DS.Model.extend({
     name: DS.attr(), 
        valA: DS.attr(), 
        modelA: DS.attr(), 
        valB: DS.attr(), 
        modelB: DS.attr(), 
        opr: DS.attr(), 
        linkBool: DS.attr(), 
        rule: DS.belongsTo('rule')


});

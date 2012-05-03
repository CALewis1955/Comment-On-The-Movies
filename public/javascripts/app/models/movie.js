var Movie = Backbone.Model.extend({
  defaults: {
    comment_count: 0,
    show_details: false,
    v_counter: 0
  },

  freshness_class: function(){
    if( this.attributes.ratings.critics_rating.toLowerCase().match(/fresh/) ){
      return 'rt_icon_fresh';
    }
    else{
      return 'rt_icon_rotten';
    }
  },

  has_score: function(){
    return (this.attributes.ratings.critics_score >= 0);
  }
});

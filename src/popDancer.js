var PopDancer = function(top,left,timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.css("border-radius", "0");
  this.$node.css("border-color", "blue");
  //this.$node.color = 'blue';
};

PopDancer.prototype = Object.create(MakeDancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  top = this.top++;
  left = this.left;
  this.setPosition(top, left);
}


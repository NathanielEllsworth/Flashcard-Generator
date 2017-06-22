/**
  * The model view controller
  */

//exporting functions to their respective files

exports.BasicCards = function BasicCards (front, back){

    this.front = front;
    this.back = back

};


exports.ClozeCards = function BasicCards (front, clozeBack){

    this.front = front;
    this.clozeBack = clozeBack;

    this.partialText = this.front.replace(clozeBack, "**Hidden**");

    this.fullText = this.clozeBack + this.partialText;


};
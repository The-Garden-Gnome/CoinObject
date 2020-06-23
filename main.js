const bodyElement = document.querySelector('body')

let coin = {
    state: 0,
    flip: function() {
       this.state = Math.round(Math.random())
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
      coin.flip()
      if (this.state === 0){
        return "Heads! "
    }
    else {
        return "Tails! "
    }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');
        if (this.state === 0){
            image.src = 'images/heads.png'
        }
        else{
            image.src = 'images/tails.png'
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

function display20Flips(){
    for (index = 0; index <= 20; index++){

    bodyElement.append(coin.toString())

}
}

function display20Images(){
    for (index = 0; index <= 20; index++){
    bodyElement.append(coin.toHTML())
    }
}

const buttonElement = document.createElement('button')
let flip = document.createTextNode("Flip");
buttonElement.appendChild(flip);  
bodyElement.append(buttonElement)

buttonElement.addEventListener ("click", 
    function() {
        display20Flips()
    })

const ImagebuttonElement = document.createElement('button')
let Image = document.createTextNode("Image");
ImagebuttonElement.appendChild(Image);  
bodyElement.append(ImagebuttonElement)

ImagebuttonElement.addEventListener ("click", 
    function() {
        display20Images()
    })
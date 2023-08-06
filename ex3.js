

function displayName(){


    console.log(this.name)

}

const object = {
    name: "Nikita"
}

displayName.apply(object);


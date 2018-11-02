let snibley = {
    name: "mr. snibley",
    pets: 0,
    moodIndex: 0,
    moods: ["happy", "grumpy", "bitey", "angry", "pissed"],
    tolerance: 5,
    images: ["https://i.pinimg.com/236x/38/3a/08/383a08912f8d07e97671d7b7bb14db0d--cat-birthday-birthday-memes.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2016/02/japanese-grumpy-cat-angry-koyuki-moflicious-22.jpg"]
}

function pet() {
    snibley.pets++

    if (snibley.pets % snibley.tolerance == 0) {
        if (snibley.moods.length > snibley.moodIndex) {
            snibley.moodIndex++
        }
    }
    draw()
}

function reset() {
    snibley.pets = 0
    snibley.moodIndex = 0
    draw()
}

function draw() {
    let template = ''
    template = `
    <img src="${snibley.images[snibley.moodIndex]}"/>
        <h2> Name: ${ snibley.name}</h2>
          <h2>Pets:${snibley.pets}</h2>
          <h2>Mood: ${snibley.moods[snibley.moodIndex]}</h2>
    `
    document.getElementById('cat-stats').innerHTML = template
}
draw()
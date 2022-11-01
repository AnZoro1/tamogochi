const tamogotchi = {
  name: 'Chaborz',
  meal: 0,
  energy: 2,
  mood: 4,
}
tamogotchi.getStatus = function () {
  if (tamogotchi.meal <= 0 || tamogotchi.energy <= 0 || tamogotchi.mood <= 0) {
    tamogotchi.name = 'Умер :('
  }
  if (tamogotchi.meal < 3) {
    tamogotchi.meal = `${'Я голоден'} (${tamogotchi.meal})`
  } else {
    tamogotchi.meal = `${'Я не голоден'} ${tamogotchi.meal}`
  }
  if (tamogotchi.energy < 3) {
    tamogotchi.energy = `${'Я хочу спать'} (${tamogotchi.energy})`
  } else {
    tamogotchi.energy = `${'Я не хочу спать'} (${tamogotchi.energy})`
  }
  if (tamogotchi.mood < 3) {
    tamogotchi.mood = ` ${'Мне скучно'} (${tamogotchi.mood})`
  } else {
    tamogotchi.mood = ` ${'Мне весело'} (${tamogotchi.mood})`
  }

  console.log(
    `${'имя'}: ${tamogotchi.name}, ${'еда'}: ${
      tamogotchi.meal
    }, ${'Энергия'}: ${tamogotchi.energy}, ${'Настроение'}: ${tamogotchi.mood}.
      `
  )
}

tamogotchi.setName = function (newName) {
  tamogotchi.name = newName
}
tamogotchi.eat = function () {
  if (tamogotchi.meal < 5) {
    tamogotchi.meal += 1
  }
  tamogotchi.mood -= 1
}
tamogotchi.sleep = function () {
  if (tamogotchi.energy < 5) {
    tamogotchi.energy += 1
  }
  tamogotchi.meal -= 1
}
tamogotchi.play = function () {
  if (tamogotchi.mood < 5) {
    tamogotchi.mood += 1
  }
  tamogotchi.energy -= 1
}

tamogotchi.getStatus()

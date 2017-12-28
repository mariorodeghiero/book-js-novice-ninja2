document.forms.hero.heroName.focus();

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

form.heroName.addEventListener('keyup',disableSubmit,false);


function makeHero(event) {
    
    event.preventDefault();
    
    const hero = {}
    hero.name = form.heroName.value;
    hero.realName = form.realName.value;
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero));
    return hero;
}

function disableSubmit(event) {
    if(event.target.value === ''){
      document.getElementById('submit').disabled = true;
    } else {
      document.getElementById('submit').disabled = false;
    }
}

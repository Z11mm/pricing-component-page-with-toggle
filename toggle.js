let changeSub = false;
const toggleSwitch = document.querySelector('#toggle-switch');

const toggle = () => {
  const monthlySub = document.querySelectorAll(
    "li[data-subscription='monthly']"
  );
  const annualSub = document.querySelectorAll(
    "li[data-subscription='annually']"
  );

  changeSub = !changeSub;

  if (changeSub === true) {
    monthlySub.forEach(item => item.classList.remove('monthly'));
    annualSub.forEach(item => item.classList.add('annually'));
  } else {
    monthlySub.forEach(item => item.classList.add('monthly'));
    annualSub.forEach(item => item.classList.remove('annually'));
  }
  
};

toggleSwitch.addEventListener('click', toggle);

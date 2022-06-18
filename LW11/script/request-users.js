async function requestUsers() {  
  if (document.getElementsByClassName('users__userdata')[0]) {
    return;
  }

  const response = await fetch('get_users_handler.php');
  const result = await response.json();
  
  for (userdata of result) {
    const newUser = document.createElement('div');
    const newUserText = document.createElement('p');
    newUserText.innerHTML = userdata.replaceAll('\n', '<br>');
    const newUserIcon = document.createElement('img');
    newUserIcon.src = '/images/icon.svg';
    newUser.appendChild(newUserIcon);
    newUser.appendChild(newUserText);
    
    newUser.classList.add('users__userdata');
    document.getElementsByClassName('users')[0].appendChild(newUser);
  }
  
  if (!document.getElementsByClassName('users__userdata')[0]) {
    const newUserText = document.createElement('p');
    newUserText.innerHTML = 'Сохраненных пользователей нет';
    document.getElementsByClassName('users')[0].appendChild(newUserText);
  }
}
const inputFields = document.getElementsByClassName('form__elementh');
const fieldName = inputFields[0];
const fieldEmail = inputFields[1];

const nameExpression = new RegExp('^[A-Za-zА-Яа-я \-]+$');
const emailExpression = new RegExp('^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z]{2,}$');
var el;
async function submitForm() {
  let isCheckFailed = false;
  fieldEmail.classList.remove('input-error');
  if (!emailExpression.test(fieldEmail.value)) {
    fieldEmail.classList.add('input-error');
    isCheckFailed = true;
  }
  fieldName.classList.remove('input-error');
  if (!nameExpression.test(fieldName.value)) {
    fieldName.classList.add('input-error');
    isCheckFailed = true;
  }
  
  if (isCheckFailed) {
    return;
  }
  
  const formData = new FormData();
  formData.append(
    'email',
    document.getElementsByClassName('form__elementh')[1].value
  )
  formData.append(
    'first_name',
    document.getElementsByClassName('form__elementh')[0].value
  )
  formData.append(
    'profession',
    document.getElementsByClassName('form__choose')[0].value
  )

  const response = await fetch('form_handler.php', {
    method: 'POST',
    body: formData
  });
  const result = await response.json();

  if (result.status == 500) {
    const popupForm = document.getElementsByClassName('form')[0];
    const closeImg = document.getElementsByClassName('form__close-popup')[0];
    const errorText = document.createElement('p');
    errorText.classList.add('popup-error-desc');
    errorText.textContent = 'Упс.. Произошла ошибка!';
    popupForm.innerHTML = '';
    popupForm.appendChild(closeImg);
    popupForm.appendChild(errorText);
  } else {
    popupLayout.classList.remove('active')
    popup.classList.remove('active');
  }
}

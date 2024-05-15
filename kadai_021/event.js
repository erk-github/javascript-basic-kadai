const btn = document.getElementById('btn');
const parentList = document.getElementById('text');

parentList.style.listStyleType = 'none';

btn.addEventListener('click',() =>{
setTimeout(() => {

// parentListの子要素を全て削除
while (parentList.firstChild) {
  parentList.removeChild(parentList.firstChild);
}

// li要素作成
const childList = document.createElement('li');
childList.textContent = 'ボタンをクリックしました';

parentList.appendChild(childList);


},2000);
});


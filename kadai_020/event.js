const btn = document.getElementById('btn');

const parentList = document.getElementById('text');

btn.addEventListener('click',() => {
  // li要素を作る
  const childList = document.createElement('li');
  childList.textContent = 'ボタンをクリックしました';

  childList.style.listStyleType = 'none';

  // parentListの子要素の削除
  if(parentList.firstChild) {
  parentList.removeChild(parentList.firstChild);
  }

  // childListの追加
  parentList.appendChild(childList);
});

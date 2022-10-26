function Menu(e){
  let list =document.querySelector('ul');

  e.name==='close' ? (e.name = 'menu', list.classList.add('top-[100px]'), list.classList.add('hidden')):(e.name='close', list.classList.remove('top-[100px]'), list.classList.remove('hidden'))
}
// // const searchForm = document.querySelectorAll('#recent-search-form ')

// const searchForm = document.getElementById('recent-search-form')
// const recentSearch = document.getElementById('recent-searched-container')
// const searchedInput = searchForm.querySelector('input')
// const deleteBtn = document.getElementById('deleteBtn')

// let searched = []

// function savingSearches() {
//   localStorage.setItem('searched data', JSON.stringify(searched))
// }

// // function showSearches(newSearch) {
// //   const li = document.createElement('h3')
// //   li.id = newSearch.id
// //   const span = document.createElement('span')
// //   span.innerText = newSearch.text
// //   li.appendChild(span)
// //   console.log(newSearch)
// //   recentSearch.appendChild(li)
// // }

// function showSearches(newSearch) {
//     //creating elements
//     const searchWrapper = document.createElement('section')
//     const searchContainer = document.createElement('div')
//     const searchImgContainer = document.createElement('div')
//     const searchImg = document.createElement('img')
//     const searchClearBtn = document.createElement('div')
//     const clearBtnImg = document.createElement('img')
//     const searchContainerInfo = document.createElement('div')
//     const searchInfoName = document.createElement('h3')
//     const searchInfoSubname = document.createElement('h4')

//     //defining types
//     searchImg.src = '/uploads/images/man-guitar.png'
//     clearBtnImg.src = '/uploads/icons/x-circle.svg'

//     //declaring classnames
//     searchWrapper.className = 'recent-searches-wrapper'
//     searchContainer.className = 'recent-searches-container'
//     searchImgContainer.className = 'recent-searches-container-img'
//     searchImg.className = 'recent-img'
//     searchClearBtn.className = 'x-icon'
//     clearBtnImg.id = 'deleteBtn'
//     searchContainerInfo.className = 'recent-searches-container-info'
//     searchInfoName.className = 'searchInfoName'
//     searchInfoSubname.className = 'searchInfoData'

//     //appending elements
//     searchWrapper.appendChild(searchContainer)
//     searchContainer.appendChild(searchImgContainer)
//     searchImgContainer.appendChild(searchImg)
//     searchImgContainer.appendChild(searchClearBtn)
//     searchContainer.appendChild(searchContainerInfo)
//     searchContainerInfo.appendChild(searchInfoName)
//     searchContainer.appendChild(searchInfoName)
//     searchClearBtn.appendChild(clearBtnImg)

//     searchContainer.id = newSearch.id
//     searchInfoName.innerText = newSearch.text
//     console.log(newSearch)
//     recentSearch.appendChild(searchContainer)
//   }

// function handleSearchSubmit(event) {
// //   event.preventDefault()
//   const newSearch = searchedInput.value
//   const newSearchObj = {
//     text: newSearch,
//     id: Date.now(),
//   }
//   searched.push(newSearchObj)
//   showSearches(newSearch)
//   savingSearches()
//   searchedInput.value = ''
// }

// function deleteSearches(event) {
// //   const clearBtn = event.document.target.parentElement
// //   searched = searched.filter((search) => search.id !== parseInt(clearBtn.id))
//   console.log('DELETINNG')
// //   clearBtn.remove()
// //   savingSearches()
// }

// searchForm.addEventListener('submit', handleSearchSubmit)
// deleteBtn.addEventListener('click', deleteSearches)

// //geting searches
// const savedSearches = localStorage.getItem('searched data')
// console.log(savedSearches)

// if (savedSearches !== null) {
//   const parseSearches = JSON.parse(savedSearches)
//   searched = parseSearches
//   parseSearches.forEach(showSearches)
// }


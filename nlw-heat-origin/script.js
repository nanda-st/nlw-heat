const socialMediaLinks = {
    github: 'nanda-st',
    instagram: 'nandx.9',
    facebook: '100067007475718',
    linkedin: 'nanda-dos-santos-tabosa'
}

function getGithubInfo() {
  const url = `http://api.github.com/users/${socialMediaLinks.github}`
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let githubImg = document.querySelector('.user-github-avatar .avatar-img')
      let githubName = document.querySelector('.user-github-info h1')
      let githuUsername = document.querySelector('.user-github-info a span')
      let githubBio = document.querySelector('.user-github-info p')

      githubImg.src = data.avatar_url
      githubName.innerHTML = data.name
      githuUsername.innerHTML = data.login
      githubBio.innerHTML = data.bio
    })  
}

getGithubInfo()

function changeSocialMediaLinks() {
    let githubLink = document.getElementsByClassName('github')
    let instagramLink = document.getElementsByClassName('instagram')
    let facebookLink = document.getElementsByClassName('facebook')
    let linkedinLink = document.getElementsByClassName('linkedin')

    let socialMediaList = [githubLink, instagramLink, facebookLink, linkedinLink]

    for (let socialMedia of socialMediaList) {
      let link = socialMedia[0].getAttribute('class')
      socialMedia.href = `https://${link}.com/` + socialMediaLinks[link]
      console.log(socialMedia.href)
    }
}

changeSocialMediaLinks()
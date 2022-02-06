function changeSocialMediaLinks() {
    const socialMediaLinks = {
        github: 'nanda-st',
        instagram: 'nandx.9',
        facebook: '100067007475718',
        linkedin: 'nanda-dos-santos-tabosa'
    }

    let githubLink = document.getElementsByClassName('github')
    let instagramLink = document.getElementsByClassName('instagram')
    let facebookLink = document.getElementsByClassName('facebook')
    let linkedinLink = document.getElementsByClassName('linkedin')

    let socialMediaList = [githubLink, instagramLink, facebookLink, linkedinLink]

    for (let socialMedia of socialMediaList) {
      let link = socialMedia[0].getAttribute('class')
      socialMedia.href = `https://${link}.com/` + socialMediaLinks[link]
    }
}

changeSocialMediaLinks()
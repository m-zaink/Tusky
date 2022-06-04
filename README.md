# Architecture

```
assets/
    pictures/
        pictureA.png
        pictureB.png
    icons/
        iconA.svg
        iconB.svg

components/
    core/
    primaryButton/
        primaryButton.js
        components/
    secondaryButton/
        secondaryButton.js
        components/
    searchBar/
        searchBar.js
        components/

scenes/
    core/
    homeScene/
        homeScene.js
        components/
            story/
                story.js
            banner/
                banner.js
    exploreScene/
        exploreScene.js
        components/
            suggestions/
                suggestions.js
            previouslySearchedKeywords/
                previouslySearchedKeyword.js

dataStores/
    core/
        paginated.js
    currentUserDataStore/
        models/
            currentUser.js
        currentUserDataStore.js
    notesDataStore/
        models/
            note.js
        notesDataStore.js

utilities/
    core/
    dately/
        dately.js
    logger/
        logger.js
    texty/
        texty.js
```

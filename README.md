# Gallery

I'll be honest, this has been a real pain.

I've managed, somehow, to get a page with a series of thumbnail pictures on it that you can flick through and enlarge by clicking the buttons.
(I'm reading a book about Bigfoot at the minute so at first my plan was to do a gallery of photos of assorted Cryptids but it turns out they're notoriously hard to photograph so my brain, obviously, went to Minsters and Cathedrals of England instead.)

Each of my images has an alternative text underneath and I've been experimenting with 'ChromeVox' and it successfully reads the alternative text of the image aloud as well as 'Go to the previous/next picture' when you hover the arrow buttons.

You can click on an image with the mouse to get a closer look and can use press enter when the arrow is highlighted for the same result however, if you tab along the list the picture remains the same, which is a bit annoying.

When messing about with the tab feature, I wasn't very happy with the borders as they were a bit dark against the photos.
I thought it might need to contrast a bit so the user could see a bit better if needed so I went back into CSS and, after a bit of research, managed to swap the colour of the border to a nice Cyan so it's bit clearer. (I should note, though, that this seems to be working as long as the user clicks with a mouse; If you use tab, it reverts to black which is very annoying. Hey ho, an attempt was made.)

I'm really quite curious about this accessibility side of things so I installed the 'WAVE' extension on Chrome to have a check of whether it's up to scratch and it seems to be ok with no contrast errors or anything, though it does mention how my alt texts are a bit wordy which is fair, but I'm not sure how far to take it as they're quite detailed pictures and I want to paint a proper picture of them, if that makes sense? (It did note that I didn't have a header, which is true, so I've taken that on board and added one in to give an overall description of what we're looking at. That being said, I can't seem to get the the screen reader to read it out and researching it opens up a whole world of ARIA levels and confusion so that might have to be a battle for another day.)

The Lighthouse analysis gives it 100%, though, on the acccessibility scale. Yay!

I'm very, very slow so hadn't replicated the example until very late on friday night. I made lots of spelling errors where I'd tried to name things then forget what I'd called them and use something else so they didn't match up. I'm thankful for Sam's giving it a look over as, to be honest, there wouldn't have been anything to hand in otherwise. I've felt like this has been a test of memory recall and replicating more than anything as I don't feel I'm close to understanding javascript, its rules or how it relates to html or css. As a result, because I couldn't follow the logic through, I found it really hard to troubleshoot when it didn't work so I got madder and madder until I fell asleep. This is a weird one; I feel like, on paper, I've done it through sheer will but I feel despondent as I don't really know how.

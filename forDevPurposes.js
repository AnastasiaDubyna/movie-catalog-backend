const Media = require('./models/Media');
const Review = require('./models/Review');

const initDatabase = async () => {
    await Review.collection.drop();
    await Media.collection.drop();

    const pussInBootsMovie = new Media({
        tmdb_id: 315162
    });

    const pussInBootsReview1 = new Review({
        username: "user1",
        title: "Not so bad",
        grade: 4,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis urna eu dui lacinia, a tincidunt elit bibendum. Proin vehicula eget nibh a aliquam. Sed eleifend sem mi, a vestibulum orci ullamcorper sed. Duis rutrum feugiat tellus id semper. Nullam quis urna nec augue molestie convallis. Praesent eget dolor sit amet felis auctor eleifend. Maecenas placerat facilisis sollicitudin. Etiam nec nibh pharetra, tincidunt sapien at, cursus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis urna eu dui lacinia, a tincidunt elit bibendum. Proin vehicula eget nibh a aliquam. Sed eleifend sem mi, a vestibulum orci ullamcorper sed. Duis rutrum feugiat tellus id semper. Nullam quis urna nec augue molestie convallis. Praesent eget dolor sit amet felis auctor eleifend. Maecenas placerat facilisis sollicitudin. Etiam nec nibh pharetra, tincidunt sapien at, cursus tortor. "
    });

    const pussInBootsReview2 = new Review({
        username: "user2",
        grade: 1,
        title: "The worst movie I've ever seen",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis urna eu dui lacinia, a tincidunt elit bibendum. Proin vehicula eget nibh a aliquam. "
    });

    const pussInBootsReview3 = new Review({
        username: "user3",
        title: "Could've been better",
        content: "Lorem ipsum dolor sit amet. A tincidunt elit bibendum. Proin vehicula eget nibh a aliquam. Sed eleifend sem mi, a vestibulum orci ullamcorper sed. Duis rutrum feugiat tellus id semper. Nullam quis urna nec augue molestie convallis. Praesent eget dolor sit amet felis auctor eleifend. Maecenas placerat facilisis sollicitudin. Etiam nec nibh pharetra, tincidunt sapien at, cursus tortor. "
    });

    pussInBootsMovie.reviews.push(pussInBootsReview1, pussInBootsReview2, pussInBootsReview3);
    await pussInBootsMovie.save();
    await pussInBootsReview1.save();
    await pussInBootsReview2.save();
    await pussInBootsReview3.save();
}

module.exports = initDatabase;
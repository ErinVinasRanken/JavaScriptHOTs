"use strict";

let totalUpvotes = 0;
let totalDownvotes = 0;

document.getElementById('upvote').addEventListener('click', function() {
    if (document.getElementById('selectedRating').value === 'downvote') {
        totalDownvotes--;
    }
    totalUpvotes++;
    document.getElementById('totalUpvotes').textContent = totalUpvotes;
    document.getElementById('selectedRating').value = 'upvote';
    document.getElementById('totalScore').textContent = totalUpvotes - totalDownvotes;
});

document.getElementById('downvote').addEventListener('click', function() {
    if (document.getElementById('selectedRating').value === 'upvote') {
        totalUpvotes--;
    }
    totalDownvotes++;
    document.getElementById('totalDownvotes').textContent = totalDownvotes;
    document.getElementById('selectedRating').value = 'downvote';
    document.getElementById('totalScore').textContent = totalUpvotes - totalDownvotes;
});
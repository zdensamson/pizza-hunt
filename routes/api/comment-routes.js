const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// /api/comment/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// /api/comments/<pizzId>/<commentId>/<replyId>
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;
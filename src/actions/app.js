export function addCommentAction(name, comment) {
        return {
            type: 'ADD_COMMENT',
            name: name,
            comment: comment
        };
}
export default function markAsDone(id) {
    return {type: 'MARK_AS_DONE', payload: id}
}
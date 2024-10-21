/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const NoteController = () => import('#controllers/note_controller')

router.on('/').renderInertia('home').as('home')

router
  .group(() => {
    router.get('', [NoteController, 'index']).as('notes.index')
    router.get('/create', [NoteController, 'create']).as('notes.create')
    router.post('', [NoteController, 'store']).as('notes.store')
    router.get('/:id', [NoteController, 'show']).as('notes.show')
    router.get('/:id/edit', [NoteController, 'edit']).as('notes.edit')
    router.put('/:id', [NoteController, 'update']).as('notes.update')
    router.delete('/:id/destroy', [NoteController, 'destroy']).as('notes.destroy')
    router.post('/:id/duplicate', [NoteController, 'duplicate']).as('notes.duplicate')
  })
  .prefix('/notes')

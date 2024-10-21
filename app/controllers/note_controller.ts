import Note from '#models/note'
import type { HttpContext } from '@adonisjs/core/http'
import inertia from '@adonisjs/inertia/client'

export default class NoteController {
  /**
   * Display a list of resource
   */
  public async index({ inertia }: HttpContext) {
    const notes = await Note.all()
    return inertia.render('Note/Index', { notes })
  }

  /**
   * Display form to create a new record
   */
  public async create({ inertia }: HttpContext) {
    return inertia.render('Note/Create')
  }

  /**
   * Handle form submission for the create action
   */
  public async store({ request, response, session }: HttpContext) {
    try {
      const data = request.only(['title', 'content', 'isComplete'])
      await Note.create(data)

      session.flash('success', 'Note created successfully')
      return response.redirect().toRoute('notes.index')
    } catch (error) {
      session.flash('error', 'Something went wrong')
      return response.redirect().back()
    }
  }

  /**
   * Show individual record
   */
  public async show({ params, response, inertia }: HttpContext) {
    try {
      return inertia.render('Note/Show', { id: params.id })
    } catch (error) {
      return response.status(404).send('Note not found')
    }
  }

  /**
   * Edit individual record
   */
  public async edit({ params, response, inertia }: HttpContext) {
    try {
      const note = await Note.findOrFail(params.id)
      return inertia.render('Note/Edit', { note })
    } catch (error) {
      return response.status(404).send('Note not found')
    }
  }

  /**
   * Handle form submission for the edit action
   */
  public async update({ params, request, response, session }: HttpContext) {
    try {
      const data = request.only(['title', 'content', 'isComplete'])
      const note = await Note.findOrFail(params.id)

      note.merge(data)
      await note.save()

      session.flash('success', 'Note updated successfully')
      return response.redirect().toRoute('notes.index')
    } catch (error) {
      session.flash('error', 'Something went wrong')
      return response.status(404).send('Note not found')
    }
  }

  /**
   * Delete record
   */
  public async destroy({ params, response, session }: HttpContext) {
    try {
      const note = await Note.findOrFail(params.id)
      await note.delete()
      session.flash('success', 'Note deleted successfully')
      return response.redirect().toRoute('notes.index')
    } catch (error) {
      session.flash('error', 'Something went wrong')
      return response.status(404).send('Note not found')
    }
  }

  /**
   * Duplicate record
   */
  public async duplicate({ params, response, session }: HttpContext) {
    try {
      const note = await Note.findOrFail(params.id)
      const newNote = new Note()
      newNote.title = note.title + ' (copy)'
      newNote.content = note.content
      newNote.isComplete = note.isComplete
      await newNote.save()
      session.flash('success', 'Note duplicated successfully')
      return response.redirect().toRoute('notes.index')
    }
    catch (error) {
      session.flash('error', 'Something went wrong')
      return response.status(404).send('Note not found')
    }
  }
}

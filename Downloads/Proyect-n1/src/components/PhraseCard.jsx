import React from 'react'

function PhraseCard({phrase, author}) {
  return (
    <article className='phrase_card'>
      <q>
        {phrase}
      </q>
      <p>
        <strong>{author}</strong>
      </p>
    </article>
  )
}

export default PhraseCard
import React from 'react'
import PropTypes from 'prop-types'
import insc from './images/inscrip.png'

const FormularioInsc = (props) => {
  const { title, subtitle } = props

  return (
    <div
      style={{
        margin: 20,
        border: '2px solid #e3e3e3',
        borderRadius: 5,
        textAlign: 'center',
      }}
    >
      <div class="container  p-4">
        <div class="row">
          <div class="col-5">
            <img
              style={{ width: '100%', height: 'auto' }}
              alt="formimg"
              src={insc}
            />
          </div>
          <div class="col-7">
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <form />
          </div>
        </div>
      </div>
    </div>
  )
}

FormularioInsc.defaultProps = {
  title: 'titulo',
  subtitle: 'subtitulo',
}

FormularioInsc.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default FormularioInsc

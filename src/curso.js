import React, { PureComponent } from 'react'
import { colores } from './theme'
import './styles.css'
import BannerLayout from './bannerLayout'
import FormularioInsc from './formularioInsc'

import cursoimg from './images/imgcurso.png'
import copy from './images/copy.png'
import badge from './images/badge.png'
import tasks from './images/tasks.png'
import timeleft from './images/time-left.png'
import exam from './images/exam.png'

const Curso = () => {
  return (
    <>
      <div style={{ textAlign: 'center', height: '8vh', marginBottom: 40 }}>
        header
      </div>
      <BannerLayout txt="micaela para agentes del estado" />
      <LayoutBody>
        <CursoBody />
        {/*  <FormularioInsc/> */}
      </LayoutBody>
    </>
  )
}

const LayoutBody = (props) => {
  return (
    <div style={{ marginRight: '6vw', marginLeft: '8vw' }}>
      {props.children}
    </div>
  )
}

const CursoBody = () => {
  return (
    <div class="container m-5">
      <div class="row">
        <div class="col-7">
          <img
            style={{ width: '100%', height: 'auto' }}
            alt="formimg"
            src={cursoimg}
          />
          <div className="mt-4">
            <Tabs />
          </div>
        </div>
        <div class="col-5">
          <ItemList />
        </div>
      </div>
    </div>
  )
}

const ItemList = () => {
  return (
    <div
      style={{
        border: `2px solid ${colores.borders}`,
        borderRadius: 10,
        paddingTop: 15,
        width: 260,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 40 }}>info de curso</div>
      <ul style={{ listStyleType: 'none' }}>
        {items.map((data) => (
          <li style={{ marginBottom: 35 }}>
            <img alt="iconitem" src={data.icon} className="e-2" />
            <span style={{ marginLeft: 10 }}> {data.txt}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Tabs = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
        {tabs.map((data, i) => (
          <li class="nav-item m-4" role="presentation">
            <button
              class={`nav-link  ${i === 0 && 'active'}`}
              id={`pill-${data.title}`}
              data-bs-toggle="pill"
              data-bs-target={`#${data.title}`}
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              {data.title}
            </button>
          </li>
        ))}
      </ul>
      <div class="tab-content" id="pills-tabContent">
        {tabs.map((data, i) => (
          <div
            class={`tab-pane fade show ${i === 0 && 'active'}`}
            id={data.title}
            role="tabpanel"
            aria-labelledby={`#pill-${data.title}`}
          >
            {data.content}
          </div>
        ))}
      </div>
    </div>
  )
}

const tabs = [
  { title: 'info', content: 'texto de la info' },
  { title: 'modulos', content: 'texto de la modulos' },
  { title: 'actividades', content: 'texto de la actividades' },
]

const items = [
  { icon: copy, txt: '4 modulos' },
  { icon: timeleft, txt: 'duracion: 1:30hs' },
  { icon: tasks, txt: '2 actividades' },
  { icon: exam, txt: '1 examen' },
  { icon: badge, txt: '4 modulos' },
]

export default Curso

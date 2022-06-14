import React, { PureComponent } from 'react'
import { colores, txtSize } from './theme'
import './styles.css'
import BannerLayout from './bannerLayout'
import FormularioInsc from './formularioInsc'

import cursoimg from './images/imgcurso.png'
import copy from './images/copy.png'
import badge from './images/badge.png'
import tasks from './images/tasks.png'
import timeleft from './images/time-left.png'
import exam from './images/exam.png'

const isMobile = () => {
  if (window.innerWidth < 350) return true
  else return false
}

const Curso = () => {
  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      <div style={{ textAlign: 'center', height: '8vh', marginBottom: 40 }}>
        header
      </div>
      <BannerLayout txt="micaela para agentes del estado" />
      <LayoutBody>
        <CursoBody />
        {/*  <FormularioInsc/> */}
      </LayoutBody>
    </div>
  )
}

const LayoutBody = (props) => {
  if (isMobile()) return <>{props.children}</>
  return (
    <div style={{ marginRight: '6vw', marginLeft: '8vw' }}>
      {props.children}
    </div>
  )
}

const CursoBody = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-7">
          <img
            style={{ width: '100%', height: 'auto' }}
            alt="formimg"
            src={cursoimg}
          />
        </div>
        <div class="col-sm-12 col-md-3 ">
          <ItemList />
          <div style={{ display: 'flex', marginTop: 15 }}>
            <button
              type="button"
              class="btn btn-outline-secondary m-auto w-100"
            >
              Iniciar examen
            </button>
          </div>
        </div>
        <div class="col-sm-12 col-md-7">
          <Tabs />
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
        // width: '20vw',
        fontSize: txtSize.s,
        margin: 'auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 30 }}>info de curso</div>
      <ul style={{ listStyleType: 'none' }}>
        {items.map((data) => (
          <li
            style={{
              marginBottom: 35,
            }}
          >
            <img
              alt="iconitem"
              src={data.icon}
              className="e-2"
              style={{ width: '2.1vw' }}
            />
            <span style={{ marginLeft: 10 }}> {data.txt}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Tabs = () => {
  return (
    <div>
      <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
        {tabs.map((data, i) => (
          <li class="nav-item mb-4 mt-2" role="presentation">
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
            style={{ height: '80vh' }}
            id={data.title}
            role="tabpanel"
            aria-labelledby={`#pill-${data.title}`}
          >
            <iframe
              frameborder="0"
              src={data.iframe}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                border: '2px solid #f2f2f2',
                borderRadius: 6,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const tabs = [
  {
    title: 'info',
    content: 'texto de la info',
    iframe: 'https://sandbox.pent.org.ar/masculinidades2-spotlight/102',
  },
  { title: 'modulos', content: 'texto de la modulos', iframe: '' },
  { title: 'actividades', content: 'texto de la actividades', iframe: '' },
]

const items = [
  { icon: copy, txt: '4 modulos' },
  { icon: timeleft, txt: 'duracion: 1:30hs' },
  { icon: tasks, txt: '2 actividades' },
  { icon: exam, txt: '1 examen' },
  { icon: badge, txt: '4 modulos' },
]

export default Curso

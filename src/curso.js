import React, { PureComponent } from 'react'
import BannerLayout from './bannerLayout'



const Curso = () => {


    return <>
    <div style={{textAlign: "center", height: "8vh", marginBottom: 40}}>header</div>
    <BannerLayout> micaela para agentes del estado</BannerLayout>
    <LayoutBody>
    <CursoBody />
    </LayoutBody>
    </>
}


const LayoutBody = (props) => {

    return <div style={{marginRight: "6vw", marginLeft: "8vw"}}>
        {props.children}
    </div>
}


const CursoBody = () => {


    return  <div class="container" style={{backgroundColor: "red"}}>
  <div class="row">
    <div class="col-8">
      Column
    </div>
    <div class="col-4">
      <div style={{
          border: "1px solid grey",
          borderRadius: 15,
          padding: 15,
          width: 220
      }} >
          <div style={{textAlign: "center",marginBottom: 40}}>
              info de curso
          </div>
            <ul style={{listStyleType: "none"}} >
            { items.map((data) => (
                 <li style={{marginBottom: 25}}>{data}</li>
             ))}
          </ul>
      </div>
    </div>
   
  </div>
</div>
}

const items = [
    "4 modulos",
    "duracion 1.30hs",
    "2 actividades",
    "1 examen",
    "certificado"
]

export default Curso
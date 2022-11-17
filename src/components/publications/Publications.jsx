import React from 'react'
import "./publications.css"

import EVOLUTION from '../../assets/DALLE-evolution.png'
import MLPIP from '../../assets/DALLE-mlpip-image.png'
import CONVCNP from '../../assets/DALLE-convcnp.png'
import PERMEQUIVARIANT from '../../assets/DALLE-permutation-equivariance.png'
import CNAPS from '../../assets/DALLE-cnaps.png'
import PNAS from '../../assets/DALLE-pnas.png'


const data =[
    {
        id: 1,
        image: EVOLUTION,
        title: 'Evolution Through Large Models',
        github: 'https://github.com/openai',
        paper: 'https://arxiv.org/pdf/2206.08896.pdf'
    },
    {
        id: 2,
        image: MLPIP,
        title: 'Meta Learning Probabilistic Inference for Prediction',
        paper: 'https://arxiv.org/pdf/1805.09921.pdf',
        github: 'https://github.com/Gordonjo/versa'
    },
    {
        id: 3,
        image: CONVCNP,
        title: 'Convolutional Conditional Neural Processes',
        paper: 'https://arxiv.org/pdf/1910.13556.pdf',
        github: 'https://yanndubs.github.io/Neural-Process-Family/text/Intro.html'
    },
    {
        id: 4,
        image: PERMEQUIVARIANT,
        title: "Permutation Equivariant Models for Generalization in Language",
        paper: 'https://openreview.net/pdf?id=SylVNerFvr',
        github: "https://github.com/facebookresearch/Permutation-Equivariant-Seq2Seq"
    },
    {
        id: 5,
        image: CNAPS,
        title: "Conditional Neural Adaptive Processes",
        paper: 'https://proceedings.neurips.cc/paper/2019/file/1138d90ef0a0848a542e57d1595f58ea-Paper.pdf',
        github: "https://github.com/cambridge-mlg/cnaps",
    },
    {
        id: 6,
        image: PNAS,
        title: "Probabilistic Neural Architecture Search",
        paper: "https://arxiv.org/pdf/1902.05116.pdf",
        github: "https://github.com/microsoft"
    }
]


const Publications = () => {
  return (
    <section id="publications">
        <h2>Selected Publications</h2>
        <div className="container publications__container">
        {
            data.map(({id, image, title, github, paper}) => {
                return (
                    <article key={id} className='publication__item'>
                        <div className='publication__item-image'>
                            <img src={image} alt="publication"/>
                        </div>
                        <h3>{title}</h3>
                        <div className='publication__item-cta'>
                            <a href={paper} className="btn" target="_blank" rel='noreferrer'>Paper</a>
                            <a href={github} className="btn btn-primary" target="_blank" rel='noreferrer'>GitHub</a>
                        </div>
                    </article>
                )
            })
        }
        </div>
    </section>
  )
}

export default Publications
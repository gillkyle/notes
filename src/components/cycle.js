import React, { useState } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';

const Cycle = () => {
  const [step, setStep] = useState(1);
  // const data = useStaticQuery(graphql`
  //   query CycleQuery {
  //     images: allFile(
  //       sort: { fields: relativePath }
  //       filter: { relativePath: { regex: "/mused-park/" } }
  //     ) {
  //       nodes {
  //         id
  //         relativePath
  //         childImageSharp {
  //           id
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const cycleChange = (stepAmount) => {
    if (step <= 1 && stepAmount <= 0) {
      return;
    }
    if (step >= 18 && stepAmount >= 0) {
      return;
    }
    setStep(step + stepAmount);
  };
  return (
    <div>
      <div className="flex justify-between">
        <button
          className={`bg-amber-500 hover:bg-amber-700 text-white font-bold py-1 px-4 rounded ${
            step <= 1 && `opacity-50 cursor-not-allowed`
          }`}
          disabled={step <= 1}
          onClick={() => cycleChange(-1)}
        >
          Prev Panel
        </button>
        <div>{step}/18</div>
        <button
          className={`bg-amber-500 hover:bg-amber-700 text-white font-bold py-1 px-4 rounded ${
            step >= 18 && `opacity-50 cursor-not-allowed`
          }`}
          onClick={() => cycleChange(1)}
        >
          Next Panel
        </button>
      </div>
      <img src={`/mused-park/${step.padStart(2, '0')}.jpg`} />
      {/* <Img fluid={data.images.nodes[step - 1].childImageSharp.fluid} /> */}
    </div>
  );
};

export default Cycle;

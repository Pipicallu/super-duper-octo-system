import React from 'react';

interface SpecificationsProps {
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
}

const Specifications: React.FC<SpecificationsProps> = ({
  brand,
  weight,
  height,
  width,
  length,
  model_code,
  colour,
}) => {
  return (
    <div className="product-details">
      <h2>Specifications</h2>
      <table className="product-specs">
        <tbody>
          <tr>
            <td>Brand</td>
            <td>{brand}</td>
          </tr>
          <tr>
            <td>Item weight (g)</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Dimensions (cm)</td>
            <td>{height} x {width} x {length}</td>
          </tr>
          <tr>
            <td>Item Model number</td>
            <td>{model_code}</td>
          </tr>
          <tr>
            <td>Colour</td>
            <td>{colour}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;

import React from 'react'

export const Image = (props) => {
  const {image_path, image_class, image_id, image_srcset, image_style, image_sizes, image_alt, image_dims} = props.image_data;
      return (
    <>
    <img src={image_path} {image_alt ? alt={ image_alt } : alt=""}
    { image_class && (className={ image_class })}
    { image_id && (id={image_id})}
    { image_srcset && srcset={ image_srcset }}
    { image_style && style={{ image_style }}}
    { image_sizes && sizes={ image_sizes }}
    { image_dims && (width={ image_dims.width } height={ image_dims.height })}/>
    </>
  )
}

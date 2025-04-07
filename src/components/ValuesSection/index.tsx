import css from './index.module.scss'

export const ValuesSection = () => {
  return (
    <div className={css.valuesWarpper}>
      <h1 className={css.logo}>Rabbit</h1>
      <div className={css.values}>
          <h1 className={css.title}>Our Values</h1>
          <p className={css.description}>
            Out main product is made with <span>attention</span> to detail and shipped <span>directly</span> to your{' '}
            <span>home. </span>{' '}
          </p>
 
      </div>
    </div>
  )
}

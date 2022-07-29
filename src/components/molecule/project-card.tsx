import capitalize from 'capitalize'
import { Tag } from '../atoms/tag'

type ProjectCardTypes = {
  title: string
  expertise: string
  description: string
  tags: string[]
}

export const ProjectCard = (props: ProjectCardTypes) => {
  const { title, expertise, description, tags } = props
  return (
    <div
      className={
        'row-span-2 cursor-pointer bg-card-background rounded shadow-md md:flex-row md:max-w-md max-h-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      }
    >
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <section className="flex justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-card-headline dark:text-white">
            {title}
          </h5>
          <p className="text-sm font-normal text-card-paragraph text-end">
            {capitalize(expertise)}
          </p>
        </section>
        {description && (
          <p className="font-normal text-card-paragraph mb-8 truncate">
            {description}
          </p>
        )}
        <div className="flex">
          {tags.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

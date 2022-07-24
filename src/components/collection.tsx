import Link from 'next/link'
import { CollectionSlug } from '../api/get-posts'
import { CollectionProps } from '../pages'
import JavaIcon from '../imgs/collections/java-icon.svg'
import Image from 'next/image'
import { Component } from 'react'
import S from 'string'

const CollectionSvg = (svg: string) => {
  console.log(svg)
  switch (svg) {
    case 'java':
      return <JavaIcon />
    default:
      return <JavaIcon />
  }
}

export const Collection = (props: CollectionProps) => {
  return (
    <>
      <ul>
        {props.collectedSlugData &&
          props.collectedSlugData.map((slug: CollectionSlug) => (
            <li key={slug.title}>
              <h1 className="text-text text-4xl mb-4">
                {S(slug.title).capitalize().s}
              </h1>
              <ul className="flex flex-row">
                {slug.slugs.map((subSlug) => (
                  <Link
                    href={`projects/[collection]/[projectSlug]`}
                    as={`/projects/${subSlug.location.collection}/${subSlug.location.projectLocation}`}
                    className="flex"
                    key={subSlug.title}
                  >
                    <div
                      className={
                        'bg-card-background rounded mr-4 mb-8 shadow-md md:flex-row md:max-w-md max-h-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
                      }
                    >
                      <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <section className="flex justify-between">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-card-headline dark:text-white">
                            {subSlug.title}
                          </h5>
                          <p className="text-xs font-normal text-card-paragraph text-end pt-2">
                            {S(subSlug.expertise).capitalize().s}
                          </p>
                        </section>
                        {subSlug.description && (
                          <p className="font-normal text-card-paragraph mb-8">
                            {subSlug.description}
                          </p>
                        )}
                        <div className="flex">
                          {subSlug.tags.map((tag) => (
                            <div
                              key={tag}
                              className="text-center font-bold text-xs mb-2 mr-2 bg-background px-4 py-2 rounded"
                            >
                              {S(tag).capitalize().s}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  )
}

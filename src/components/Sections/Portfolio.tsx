import {ArrowTopRightOnSquareIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">개발사례 사진첩</h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, image}}) => {
    const [mobile, setMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      // 모바일 여부 설정 (hydration 에러 방지)
      if (isMobile) 
        setMobile(true);
    }, []);
    useDetectOutsideClick(linkRef, () => setShowOverlay(false));

    const handleItemClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        event.preventDefault(); // 링크 이동 막기
        setIsModalOpen(true); // 모달 열기
      },
      []
    );

    return (
      <>
        {/* 오버레이 */}
        <a
          className={classNames(
            'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
            {'opacity-0 hover:opacity-80': !mobile},
            showOverlay ? 'opacity-80' : 'opacity-0',
          )}
          href={url}
          onClick={handleItemClick}
          ref={linkRef}
        >
          <div className="relative h-full w-full p-4">
            <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
              <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
              <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
            </div>
            <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
          </div>
        </a>

        {/* 이미지 확대 모달 */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)} // 배경 클릭 시 닫기
          >
            <div
              className="relative max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()} // 이미지 클릭 시 닫힘 방지
            >
              <button
                className="absolute top-2 right-2 rounded-full bg-black/50 p-1 hover:bg-black/70"
                onClick={() => setIsModalOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
              <Image
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg object-contain"
                height={800}
                src={image}                
                width={1200}
              />
              <p className="text-center text-white mt-2">{title}</p>
            </div>
          </div>
        )}
      </>
    );
  }
);

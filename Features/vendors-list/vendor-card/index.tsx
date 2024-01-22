import Image from 'next/image';

import { numberSeprator } from '@/utils/helpers';

import { TVendorItem } from '@/redux/services/vendors/interface';

import styles from './styles.module.scss';

const VendorCard = ({ card }: { card: TVendorItem }) => {
  const cardDescriptionArr = card.data.description.split(',');

  return (
    <div className={styles['card']}>
      <div className={styles['card__header']}>
        <Image
          src={card.data.backgroundImage}
          alt='business-backgruond'
          width={343}
          height={114}
          className={styles['card__header--background']}
        />
        <Image
          src={card.data.logo}
          alt='logo'
          width={54}
          height={54}
          className={styles['card__header--logo']}
        />
      </div>
      <div className={styles['card__body']}>
        <h3 className={styles['card__title']}>{card.data.title}</h3>
        <div className={styles['card__body--description']}>
          {cardDescriptionArr.map((desc, index) => (
            <span key={index}>{desc}</span>
          ))}
        </div>
        <div className={styles['card__ratingAndView']}>
          <span className={styles['card__ratingAndView--view']}>
            ({numberSeprator(card.data.countReview)})
          </span>
          <span className={styles['card__ratingAndView--rate']}>
            {numberSeprator(card.data.rate)}
          </span>
        </div>
        <div className={styles['card__body--delivery']}>
          <span>{card.data.isZFExpress ? 'ارسال اکسپرس' : 'پیک فروشنده'}</span>
          <span>{numberSeprator(card.data.deliveryFee)} تومان </span>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;

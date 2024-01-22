import { TVendorItem } from '@/redux/services/vendors/interface';

import styles from './styles.module.scss';
import Image from 'next/image';

const VendorCard = ({ card }: { card: TVendorItem }) => {
  const cardDescriptionArr = card.data.description.split(',');
  console.log(cardDescriptionArr);

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
        <span className={styles['card__title']}>{card.data.title}</span>
        <div className={styles['card__body--description']}>
          {cardDescriptionArr.map((desc, index) => (
            <span key={index}>{desc}</span>
          ))}
        </div>
        <div className={styles['card__ratingAndView']}>
          <span className={styles['card__ratingAndView--view']}>
            ({card.data.countReview.toLocaleString('fa')})
          </span>
          <span className={styles['card__ratingAndView--rate']}>
            {card.data.rate.toLocaleString('fa')}
          </span>
        </div>
        <div className={styles['card__body--delivery']}>
          <span>{card.data.isZFExpress ? 'ارسال اکسپرس' : 'پیک فروشنده'}</span>
          <span>{card.data.deliveryFee.toLocaleString('fa')} تومان </span>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;

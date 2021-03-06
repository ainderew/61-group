import React, { useEffect } from "react";
import Image from "react-image-webp";
import "../silica-sand.style.scss";

//IMAGES
import Image1 from "../../../../../assets/images/silica-sand-article-img-1.webp";
import Image1JPG from "../../../../../assets/images/silica-sand-article-img-1.jpg";
// import Image2 from "../../../../../assets/images/silica-sand-article-img-2.webp";
import Image3 from "../../../../../assets/images/silica-sand-article-img-3.webp";
import Image3JPG from "../../../../../assets/images/silica-sand-article-img-3.jpg";

export const SilicaSandArticle = () => {
  useEffect(() => {
    document.body.scrollIntoView();
  });
  return (
    <div className="silica-sand-article">
      <div className="article-hero-banner">
        <h1 className="article-heading-text">Кварцевый песок окатанный</h1>
      </div>
      <div className="article-body">
        <div className="article-inner-body">
          <div className="article-row-1">
            <div className="article-row-1-col-left">
              <p className="article-p">
                Минеральный материал, получаемый в результате разрушения крупных
                кварцевых пород, с образованием малых фракций. Окатанный
                кварцевый песок широко используется в строительстве, а также в
                некоторых других сферах – например, в водоочистке. Добыча
                ведется либо вымыванием из водоемов, либо из карьеров – открытым
                способом. Ключевые преимущества материала – в округлой форме
                фракций и сниженной абразивности, а также небольшом количестве
                примесей. Свяжитесь с нами, чтобы заказать качественный
                окатанный кварцевый песок – мы будем рады сотрудничеству в
                оптовом формате.
              </p>
            </div>
            <div className="article-row-1-col-right">
              {/* <img
                loading="lazy"
                src={Image1}
                alt="Кварцевый песок окатанный"
                className="article-row-1-img"
              /> */}
              <Image
                src={Image1JPG}
                webp={Image1}
                alt="Кварцевый песок окатанный"
                className="article-row-1-img"
              />
            </div>
          </div>

          <div className="article-row-2">
            <h2 className="article-h2">
              Свойства и особенности кварцевого песка
            </h2>
          </div>

          <div className="article-row-3">
            <div className="article-row-3-col-left">
              <p className="article-p">
                Сыпучий кварцевый материал, предлагаемый нашей компанией,
                отличается высоким качеством и чистотой состава. На диоксид
                кремния приходится от 97 до 99 процентов массы, при этом на
                глинистые примеси приходится не больше 0,4 процента состава.
                Такая чистота достигается за счет специальной обработки –
                материал обогащается, промывается, сушится при высокой
                температуре. После песок разделяют на фракции, исходя из размера
                частиц:
              </p>
            </div>
            <div className="article-row-3-col-right">
              <ul className="article-ul">
                <li className="article-li">до 0,1 мм – кварцевая мука</li>
                <li className="article-li">0,1 – 0,4 мм – обычный песок</li>
                <li className="article-li">0,5 – 1,0 мм – крупный песок</li>
                <li className="article-li">более 1,0 мм – кварцевая крошка.</li>
              </ul>
            </div>
          </div>

          <div className="article-row-4">
            <p className="article-p">
              К преимуществам кварцевого песка относят разнообразие и
              естественность окраса частиц. Если материал используется в
              облицовке, он может содержать дополнительные красители. Среди
              общих плюсов окатанного песка можно также выделить следующие
              факторы:
            </p>
          </div>
          <div className="article-row-5">
            <ul className="article-ul">
              <li className="article-li">
                Устойчивость к ультрафиолетовому излучению, к воздействию многих
                агрессивных химических соединений.
              </li>
              <li className="article-li">
                Долгое время остается в исходном состоянии, не меняет свойств и
                внешнего вида.
              </li>
              <li className="article-li">
                Чистота позволяет использовать песок даже в аквариумах, или как
                субстрат для растений (благодаря тому, что частицы шлифованные и
                достаточно гладкие).
              </li>
            </ul>
          </div>

          <div className="article-row-6">
            <p className="article-p">
              Выбирая кварцевый песок, нужно учитывать цели использования, а
              также обращать внимание на свойства материала. Частицы должны быть
              твердыми и отшлифованными, устойчивыми к механическим воздействиям
              и контактам с химически агрессивными средами.
            </p>
          </div>

          <div className="article-row-7">
            <h4 className="article-row-7-watermark">
              Сферы использования кварцевого песка
            </h4>
            {/* <img loading="lazy" src={Image3} alt="" className="article-img-3" /> */}
            <Image
              src={Image3JPG}
              webp={Image3}
              alt="Кварцевый песок окатанный"
              className="article-img-3"
            />

            <div className="article-row-7-white-div">
              <h2 className="article-h2">
                СФЕРЫ ИСПОЛЬЗОВАНИЯ КВАРЦЕВОГО ПЕСОК
              </h2>
            </div>
          </div>

          <div className="article-row-8">
            <p className="article-p">
              Кварцевый песок применяется во многих областях промышленности и
              ряде других сфер. Продукция проходит тщательный контроль качества,
              подразделяется по фракциям и оттенкам. Цвет определяется
              месторождением, а также содержащимися в материале примесями
              (например, красный песок получается благодаря присутствию оксидов
              железа и марганца).
            </p>
          </div>

          <div className="article-row-9">
            <p className="article-p">
              Основные направления использования окатанного кварцевого песка:
            </p>
            <ul className="article-ul">
              <li className="article-li">
                Очистка и подготовка воды (установки смягчения и
                обезжелезивания, а также системы фильтрации).
              </li>
              <li className="article-li">
                Оборудование для пескоструйной обработки конструкций,
                поверхностей (песок - в качестве абразива).
              </li>
              <li className="article-li">
                Производство керамики, фарфора, стекла (сырьем является
                стекольный песок).
              </li>
              <li className="article-li">
                Изготовление стержней, формовочных смесей на литейных
                предприятиях.
              </li>
              <li className="article-li">
                Производство строительных смесей – сухие материалы, штукатурки,
                некоторые лакокрасочные составы.
              </li>
              <li className="article-li">
                Создание полимерных наливных напольных покрытий.
              </li>
            </ul>
            <p className="article-p">
              Еще одно направление использования окатанного песка – на
              спортивных объектах, преимущественно в качестве компонента
              дренажных систем. Также может быть базовым засыпным материалом
              полей для различных видов спорта.
            </p>
          </div>

          <div className="article-row-10">
            <h2 className="article-h2">
              Преимущества покупки кварцевого песка в нашей компании
            </h2>
          </div>

          <div className="article-row-11">
            <p className="article-p">
              Наша компания сотрудничает с производителями кварцевого песка без
              посредников, действуют эффективные схемы приобретения и поставок
              сыпучих материалов. Все наши клиенты могут рассчитывать на
              привлекательные, выгодные условия покупки. Преимущества
              сотрудничества с нами:
            </p>

            <ul className="article-ul">
              <li className="article-li">
                Сравнительно низкие цены, за счет оптимизации системы поставок и
                прямого сотрудничества с производителями сырья.
              </li>
              <li className="article-li">
                Материалы качественные, полностью соответствуют требованиям
                ГОСТов и технических условий.
              </li>
              <li className="article-li">
                Стоимость формируется исходя из местонахождения пункта доставки,
                а также объема заказа. Гибкие условия приобретения, специальные
                предложения для постоянных клиентов.
              </li>
              <li className="article-li">
                Поставка песка непосредственно в биг бэгах, или же фасовкой по
                мешкам.
              </li>
              <li className="article-li">
                Если продукция не будет соответствовать заявленным
                характеристикам, вы можете рассчитывать на возврат стоимости.
              </li>
              <li className="article-li">
                Различные варианты оплаты заказов для удобства клиентов.
              </li>
              <li className="article-li">
                Доставка по РФ, СНГ (основные направления), а также в страны
                Азии и Европы.
              </li>
            </ul>

            <p className="article-p">
              Исходя из пожеланий клиента, объема заказа, типа фасовки и
              расстояния транспортировки, доставка может быть осуществлена либо
              автомобильным грузовым транспортом, либо по железной дороге. Также
              в отдельных случаях для перевозки груза используются морские
              контейнеры.
              <br /> <br />
              Чтобы заказать окатанный кварцевый песок или другие материалы,
              позвоните нам, или оставьте заявку по электронной почте. Все
              обращения клиентов оперативно обрабатываются и принимаются в
              работу. При необходимости специалисты компании готовы оказать
              консультационную поддержку.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

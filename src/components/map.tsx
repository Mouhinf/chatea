// As we cannot add new dependencies, this component acts as a placeholder
// for the interactive map requested by the user.
// It gives the visual impression of a map without the need for @vis.gl/react-google-maps.
// An iframe is used to embed Google Maps.

export function Map() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3847702951933!2d-17.43673288864278!3d14.670216575199464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172551e138a39%3A0x6851f5ac8eb44040!2sRue%2015%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1722426861427!5m2!1sfr!2ssn";

  return (
    <div className="w-full h-full">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map de Rue 15 Vincent, Dakar Plateau"
      ></iframe>
    </div>
  );
}

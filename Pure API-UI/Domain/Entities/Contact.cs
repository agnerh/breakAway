using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BreakAway.Entities
{
    public class Contact
    {
        public int Id { get; set; }

        [StringLength(50), Required]
        public string FirstName { get; set; }

        [StringLength(50), Required]
        public string LastName { get; set; }

        public string FullName
        {
            get
            {
                string name = string.Format("{0} {1}", FirstName, LastName);

                if (!string.IsNullOrEmpty(Title))
                    name = string.Format("{0} {1}", Title, name);

                return name;
            }
        }

        [StringLength(50)]
        public string Title { get; set; }

        public DateTime AddDate { get; set; }
        
        public DateTime ModifiedDate { get; set; }
        
        public byte[] RowVersion { get; set; }

        public virtual IList<Address> Addresses { get; set; }

        public virtual PersonalInfo PersonalInfo { get; set; }

        public virtual IList<Reservation> Reservations { get; set; }
    }
}